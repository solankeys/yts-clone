import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Tabs from './Tabs';
import './Modal.css'

function Modals( modal, setModal) {

    const showModalHandler = () => {
        setModal(prev => !prev );
    }
    function afterOpenModal() { }

    return (
        <div>
            <Modal
            isOpen={modal}
            onAfterOpen={afterOpenModal}
            onRequestClose={showModalHandler}
            className="modal" >
                <Tabs />
            </Modal>
        </div>
    )
}

export default Modals;
