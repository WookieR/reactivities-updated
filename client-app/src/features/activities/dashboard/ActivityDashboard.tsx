import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { IActivity } from '../../../app/models/activity';
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from './ActivityList';

interface props {
    activities: IActivity[];
    selectedActivity: IActivity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export const ActivityDashboard = ({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity, submitting} : props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} 
                      selectActivity={selectActivity}
                      deleteActivity={deleteActivity}
                      submitting={submitting}
        />
      </Grid.Column>
      <GridColumn width='6'>
        {selectedActivity && !editMode &&
        <ActivityDetails activity={selectedActivity} 
                         cancelSelectActivity={cancelSelectActivity} 
                         openForm={openForm}
        />}
        {editMode && 
        <ActivityForm closeForm={closeForm} 
                      activity={selectedActivity}
                      createOrEdit={createOrEdit}
                      submitting={submitting}
        />} 
      </GridColumn>
    </Grid>
  );
};
