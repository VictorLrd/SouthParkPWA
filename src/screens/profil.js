import React, { useEffect } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import allTheActions from '../actions'

const Profil = props => {
  useEffect(() => {
    props.actions.user.userInfoCall()
    console.log(props.userState)
  }, [])
  return (
    <Container>
      <Header>
        <Userprofil>
          <ContainerInfo>
            <Avatar
              src={'https://www.afrik.com/wp-content/uploads/2019/11/Akon.jpg'}
            ></Avatar>
          </ContainerInfo>
          <ContainerInfo>
            <Username>{props.userState.userInfo.username}</Username>
            <Email>{props.userState.userInfo.email}</Email>
            <MyTeam>{props.userState.userInfo.favoriteTeam}</MyTeam>
            <MyGroup>
              <strong>
                <u>Nom du groupe :</u>
              </strong>{' '}
              {props.userState.userInfo._group.name}
            </MyGroup>
            <MyGroupCode>
              <strong>
                <u>Code du groupe :</u>
              </strong>{' '}
              {props.userState.userInfo._group.code}
            </MyGroupCode>
          </ContainerInfo>
        </Userprofil>
        <UserPoints>
          <Points>{props.userState.userInfo.totalPoint} points</Points>
        </UserPoints>
      </Header>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: #00d46499;
  padding: 1em;
`

const Userprofil = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const ContainerInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-weight: bold;
    font-family: sans-serif;
    color: #ffffff;
    padding:0 1rem;
}
`
const UserPoints = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center;
}
`
const Avatar = styled.img`
    max-width: 10em;
    max-height: 10em;
    border-radius: 5em;
    border:5px solid gray;
}
`
const Username = styled.span`
    font-size: 2em;
}
`
const Email = styled.span`
    font-size: 1em;
}
`
const MyTeam = styled.span`
    font-size: 1em;
}
`
const MyGroup = styled.span`
  font-size: 1em;
`

const MyGroupCode = styled.span`
  font-size: 1em;
`
const Points = styled.span`
  font-size: 3em;
  text-al
`

const mapStateToProps = state => ({
  userState: state.user
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    user: bindActionCreators(allTheActions.user, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profil)
