//Imports
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

//Component
const Profile = (props) => {

    useEffect(() => {
        
    })

    return (
        <Page>
            <ProfileCard>
                <EquipmentCardContainer>
                    <EquipmentCard>

                    </EquipmentCard>
                </EquipmentCardContainer>
            </ProfileCard>
        </Page>
    )
}
//Export
export default connect(mapStateToProps, {})(Profile)

//Styling
const Page = styled.div``

const ProfileCard = styled.div``

const EquipmentCardContainer = styled.div``

const EquipmentCard = styled.div``