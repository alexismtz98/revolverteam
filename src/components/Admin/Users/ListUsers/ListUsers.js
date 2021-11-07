import React, { useState, useEffect } from 'react';
import { Switch, List, Avatar, Button, notification, Modal as ModalAntd } from "antd";
//import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import EditOutlined from '@ant-design/icons/EditOutlined';
import StopOutlined from '@ant-design/icons/StopOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import CheckOutlined from '@ant-design/icons/CheckOutlined';
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";
import AddUserForm from "../AddUserForm";
import { getAvatarApi, activateUserApi, deleteUserApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";


import "./ListUsers.scss";

const { confirm } = ModalAntd;

export default function ListUsers(props) {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActives, setviewUsersActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const addUserModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo usuario");
    setModalContent(
      <AddUserForm setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} />
    )

  }

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch">
          <Switch
            defaultChecked
            onChange={() => setviewUsersActives(!viewUsersActives)}
          />
          <span>
            {viewUsersActives ? "Usuarios activos" : "Usuarios inactivos"}
          </span>
        </div>
        <Button type="primary" onClick={ addUserModal }>
          Nuevo usuario
        </Button>
      </div>

      {viewUsersActives ?
        <UsersActive usersActive={usersActive} setIsVisibleModal={setIsVisibleModal} setModalTitle={setModalTitle} setModalContent={setModalContent} setReloadUsers={setReloadUsers} /> :
        <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />}
      <Modal
        title={modalTitle} isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
        {modalContent}
      </Modal>
    </div>
  )
}

function UsersActive(props) {
  const { usersActive, setIsVisibleModal, setModalTitle, setModalContent, setReloadUsers } = props;
  const editUser = user => {
    setIsVisibleModal(true);
    setModalTitle(`Editar ${user.name ? user.name : "..."} ${user.lastname ? user.lastname : "..."}`);
    setModalContent(<EditUserForm user={user} setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} />);
  }
  return (
    <List className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={user => <UserActive user={user} editUser={editUser} setReloadUsers={setReloadUsers} />}
    />
  )
}

function UserActive(props) {
  const { user, editUser, setReloadUsers } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then(response => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  const deactivateUser = () => {
    console.log('desactivando');
    const accessToken = getAccessTokenApi();

    activateUserApi(accessToken, user._id, false)
      .then(response => {
        notification["success"]({
          message: response
        });
        setReloadUsers(true);
      })
      .catch(err => {
        notification["error"]({
          message: err
        });
      })
  };

  const showDeleteConfirm = () => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando usuario",
      content: `¿Estás seguro que quiere eliminar a ${user.email}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteUserApi(accessToken, user._id)
          .then(response => {
            notification["success"]({
              message: response
            });
            setReloadUsers(true);
          })
          .catch(err => {
            notification["error"]({
              message: err
            })
          })
      }
    })
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editUser(user)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={deactivateUser}>
          <StopOutlined />
        </Button>,
        <Button type="danger" onClick={showDeleteConfirm}>
          <DeleteOutlined />
        </Button>
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
                ${user.name ? user.name : "..."} 
                ${user.lastname ? user.lastname : "..."}
            `}
        description={user.email}
      />
    </List.Item>
  );

}

function UsersInactive(props) {
  const { usersInactive, setReloadUsers } = props;

  return (
    <List className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={user => <UserInactive user={user} setReloadUsers={setReloadUsers} />}
    />
  )
}

function UserInactive(props) {
  const { user, setReloadUsers } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then(response => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  const activateUser = () => {
    console.log('desactivando');
    const accessToken = getAccessTokenApi();

    activateUserApi(accessToken, user._id, true)
      .then(response => {
        notification["success"]({
          message: response
        });
        setReloadUsers(true);
      })
      .catch(err => {
        notification["error"]({
          message: err
        });
      })
  };

  const showDeleteConfirm = () => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando usuario",
      content: `¿Estás seguro que quiere eliminar a ${user.email}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteUserApi(accessToken, user._id)
          .then(response => {
            console.log(response);
            notification["success"]({
              message: response
            });
            setReloadUsers(true);
          })
          .catch(err => {
            console.log(err);
            notification["error"]({
              message: err
            })
          })
      }
    })
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={activateUser}>
          <CheckOutlined />
        </Button>,
        <Button type="danger" onClick={showDeleteConfirm}>
          <DeleteOutlined />
        </Button>
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
                    ${user.name ? user.name : "..."} 
                    ${user.lastname ? user.lastname : "..."}
                `}
        description={user.email}
      />
    </List.Item>

  )
}