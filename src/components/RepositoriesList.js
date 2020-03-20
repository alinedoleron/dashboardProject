import { Autocomplete} from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import {getOrganization, getUser} from '../queries/queries';

const RepositoriesList = (props) => {
    let listOfRepositories = [];
    console.log('props', props);

    let onValueChange = (event, value) => {
        props.setRepoState(
            {
                user: props.user,
                repository: value
            }
        )
    };

    const { data, loading, error } = useQuery(
            getOrganization,
            {
                variables:
                    {
                        user: props.user
                    }
                }
            );

    if (data) {
        listOfRepositories = data.organization.repositories.edges.map(x => x.node.name);
    }

    const {data: dataUser, loading: loadingUser, error: errorUser } = useQuery(
        getUser,
        {
            variables:
                {
                    user: props.user
                }
            }
        );

    if(dataUser) {
        console.log('dataUser', dataUser);
        listOfRepositories = dataUser.user.repositories.edges.map(x => x.node.name);
    }



return (
    <Autocomplete
        id="combo-box-demo"
        options={listOfRepositories}
        onChange={onValueChange}
        getOptionLabel={option => option}
        style={{ width: 300 }}
        renderInput={params => (
            <TextField {...params} label="Combo box" variant="outlined" fullWidth />
        )}
        />
);
};



export default RepositoriesList;