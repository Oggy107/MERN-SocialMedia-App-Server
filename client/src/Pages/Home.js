import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Grid } from 'semantic-ui-react'

import PostCard from '../components/PostCard';

import { GET_POSTS } from '../graphql/queries';

const Home = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    return (
        <React.Fragment>
            <div className="title">
                <h1>Recent Posts</h1>
            </div>
            <Grid columns={3}>
                <Grid.Row>
                    {
                        loading ? (
                            <h1>Loding posts...</h1>
                        ) :
                        error ? 
                        (
                            <h1>Error loading posts</h1>
                        ) :
                        (
                            data.getPosts.map(post => (
                                <Grid.Column key={post._id} style={{margin: '1rem 0'}}>
                                    <PostCard post={post} />
                                </Grid.Column>
                            ))
                        )
                    }
                </Grid.Row>
            </Grid>
        </React.Fragment>
    );
};

export default Home;
