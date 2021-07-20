//Imports
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import {requestOwnerEquipment} from '../store/actions';

//Component
const Profile = (props) => {

    useEffect(() => {
        axiosWithAuth.get(`https://my-tech-back-end.herokuapp.com/equipment/${props.user.user_id}`)
            .then(res => {
                props.requestOwnerEquipment(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Page>
            <ProfileCard>
                <EquipmentCardContainer>
                    <EquipmentCard>
                        blah blah blah
                    </EquipmentCard>
                </EquipmentCardContainer>
            </ProfileCard>
        </Page>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        equipmentOwner: state.equipmentOwner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestOwnerEquipment: (equipments) => dispatch(requestOwnerEquipment(equipments))
    }
}

//Export
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

//Styling
const Page = styled.div``

const ProfileCard = styled.div``

const EquipmentCardContainer = styled.div``

const EquipmentCard = styled.div``