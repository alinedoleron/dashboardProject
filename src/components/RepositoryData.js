import ClayForm, {ClayInput} from '@clayui/form';
import React  from 'react';
import RepositoriesList from './RepositoriesList';

const RepositoryData = ({repoState, setRepoState}) => {

return (
    <ClayForm.Group>
        <ClayInput
        id="basicInputText"
        placeholder="Insert name of organization/user"
        type="text"
        onBlur={(event) => {
                console.log('mudou');
                setRepoState({
                    user: event.target.value
                });
                }
        }
        />
        <RepositoriesList {...repoState} setRepoState={setRepoState}/>

    </ClayForm.Group>
);
};



export default RepositoryData;