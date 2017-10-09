import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Entries = new Mongo.Collection('entries');

if (Meteor.isServer){
    Meteor.publish('entries',function entriesPublication(){
            return Entries.find({ owner:Meteor.userId()});

    });
}

Meteor.methods({
    'entries.insert'(entry){
        check(entry,{
            fromDate:Date,
            toDate:Date,
            mood:String,
            symptoms:Number,
            unexplained:Boolean,
            thoughts:String
        });
        if(! Meteor.userId()){
            throw new Meteor.Error('not-authorized', 'Must be logged in to add new entries.');
        }

        entry.owner = Meteor.userId();
        entry.createdAt = new Date();
        Entries.insert(entry);
    },
    'entries.update'(entryId, entry){
        check(entry,{
            fromDate:Date,
            toDate:Date,
            mood:String,
            symptoms:Number,
            unexplained:Boolean,
            thoughts:String
        });
        let oldEntry = Entries.findOne({_id:entryId});
        if(! Meteor.userId() ){
            throw new Meteor.Error('not-authorized', 'Must be logged in to edit entries.');
        }

        if(oldEntry.owner !== Meteor.userId()){
            throw new Meteor.Error('not-authorized', 'Must own an entry to edit it');
        }

        Entries.update(entryId, {
            $set:entry
        });


    },
    'entries.remove'(entryId){

        let oldEntry = Entries.findOne({_id:entryId});
        if(! Meteor.userId() ){
            throw new Meteor.Error('not-authorized', 'Must be logged in to delete entries.');
        }

        if(oldEntry.owner !== Meteor.userId()){
            throw new Meteor.Error('not-authorized', 'Must own an entry to delete it');
        }
        Entries.remove({_id:entryId});
    }

});