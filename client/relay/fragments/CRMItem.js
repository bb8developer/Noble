/**
 * Created by nick on 12/05/2017.
 */
import Relay from 'react-relay';
/**
 * define CRM Item Fragment
 */
export const CRMItemFragment = Relay.QL`
  fragment on ListCRMItems {
    id,
    items {
      id, 
      owner {
        name,
        id,
        email,
        phone,
      },
      created_time,
      properties,
      note
    }
  }
`;
