import React, {Component} from 'react';
import Link from './Link';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
    {
        feed {
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`
class LinkList extends Component {
    render() {
        return (
            <Query query={FEED_QUERY}>
                {({loading,error,data}) => {
                    if(loading){
                        return (<div>Fetching...</div>)
                    }

                    if(error){
                        return (<div>Error... We'll fix it be patience...</div>)
                    }
                    const linksToRender = data.feed.links;

                    return (  
                        linksToRender.map( function(link){ 
                            return(
                                <Link key={link.id} link={link} description={link.description} />

                            )
                        }) 
                    )
                }}
            </Query>
        )
    }

}

export default LinkList;