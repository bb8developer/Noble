/**
 * Created by nick on 12/05/2017.
 */
import { globalIdField } from 'graphql-relay';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';
import { nodeInterface } from '../nodeInterface';

const CRMItemOwnerType = new GraphQLObjectType({
  name: 'CRMItemOwner',
  description: 'CRM Item Owner information',
  fields: {
    id: globalIdField('CRMItemOwner'),
    domain: {
      type: GraphQLString,
      description: 'Domain'
    },
    email: {
      type: GraphQLString,
      description: 'Email'
    },
    phone: {
      type: GraphQLString,
      description: 'Phone'
    },
    name: {
      type: GraphQLString,
      description: 'Name'
    },
    pic: {
      type: GraphQLString,
      description: 'Owner Image'
    },
    schedule_id: {
      type: GraphQLString,
      description: 'Owner Schedule ID'
    },
    calendar_url: {
      type: GraphQLString,
      description: 'Calendar URL'
    },
    calendarURL: {
      type: GraphQLString,
      description: 'Calendar URL'
    },
  }
});

export const CRMItemType = new GraphQLObjectType({
  name: 'CRMItem',
  description: 'CRM Item Information',
  fields: {
    id: globalIdField('CRMItem'),
    cursor: {
      type: GraphQLString,
      description: 'Next cursor'
    },
    type: {
      type: GraphQLString,
      description: 'CRM type'
    },
    created_time: {
      type: GraphQLInt,
      description: 'Created time'
    },
    updated_time: {
      type: GraphQLInt,
      description: 'Updated time'
    },
    last_contacted: {
      type: GraphQLInt,
      description: 'Last contacted time'
    },
    last_emailed: {
      type: GraphQLInt,
      description: 'Last emailed time'
    },
    last_campaign_emaild: {
      type: GraphQLInt,
      description: 'Last campaign emailed time'
    },
    last_called: {
      type: GraphQLInt,
      description: 'Last called time'
    },
    viewed_time: {
      type: GraphQLInt,
      description: 'Last viewed time'
    },
    star_value: {
      type: GraphQLInt,
      description: 'Star value'
    },
    lead_score: {
      type: GraphQLInt,
      description: 'Score value'
    },
    klout_score: {
      type: GraphQLInt,
      description: 'KLout value'
    },
    tags: {
      type: GraphQLString,
      description: 'Tags',
      resolve: item => item.tags.join(','),
    },
    tagsWithTime: {
      type: GraphQLString,
      description: 'Tags time',
      resolve: item => JSON.stringify(item.tagsWithTime),
    },
    properties: {
      type: GraphQLString,
      description: 'Properties value',
      resolve: item => JSON.stringify(item.properties),
    },
    campaignStatus: {
      type: GraphQLString,
      description: 'Campaign Status',
      resolve: item => JSON.stringify(item.campaignStatus),
    },
    entity_type: {
      type: GraphQLString,
      description: 'Entity Type',
    },
    unsubscribeStatus: {
      type: GraphQLString,
      description: 'Unsubscribe Status',
      resolve: item => JSON.stringify(item.unsubscribeStatus),
    },
    emailBounceStatus: {
      type: GraphQLString,
      description: 'Email bounce Status',
      resolve: item => JSON.stringify(item.emailBounceStatus),
    },
    formId: {
      type: GraphQLInt,
      description: 'Form ID'
    },
    browserId: {
      type: GraphQLString,
      description: 'Browser ID',
      resolve: item => JSON.stringify(item.browserId),
    },
    lead_source_id: {
      type: GraphQLInt,
      description: 'Lead source ID'
    },
    lead_status_id: {
      type: GraphQLInt,
      description: 'Lead Status ID'
    },
    is_lead_converted: {
      type: GraphQLBoolean,
      description: 'Flag for Lead has been converted or not'
    },
    lead_converted_time: {
      type: GraphQLInt,
      description: 'Lead converted time'
    },
    is_duplicate_existed: {
      type: GraphQLBoolean,
      description: 'Flag for duplicated status'
    },
    trashed_time: {
      type: GraphQLInt,
      description: 'Trashed time'
    },
    restored_time: {
      type: GraphQLInt,
      description: 'Restored time'
    },
    owner: {
      type: CRMItemOwnerType,
      description: 'Owner Information'
    },
    note: {
      type: GraphQLString,
      description: 'Note information',
    }
  },
  interfaces: [nodeInterface],
});
