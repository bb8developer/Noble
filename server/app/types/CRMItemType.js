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

export const CRMItemType = new GraphQLObjectType({
  name: 'CRMItem',
  description: 'CRM Item Information',
  fields: {
    id: globalIdField('CRM'),
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
      type: GraphQLInt,
      description: 'Browser ID'
    }
  }
});
