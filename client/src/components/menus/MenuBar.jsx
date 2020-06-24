import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends, faChalkboardTeacher, faSchool, faUsers } from '@fortawesome/free-solid-svg-icons'

const MenuBar = () => {
    let menuOpen = true;

    function burgClick() {
        console.log("burger clicked");
        const burgerBtn = document.querySelector('.burger-button-wrap');
        const sideBar = document.querySelector('.sidebar');

        if (!menuOpen) {
            burgerBtn.classList.add('open');
            sideBar.classList.remove('side-open');

            menuOpen = true;
        } else {
            burgerBtn.classList.remove('open');
            sideBar.classList.add('side-open');
            menuOpen = false;
        }

    }

    return (
        <div className="menu-bar">
            <div class="burger-button-wrap open">
                <div class="burger-button" onClick={burgClick}>
                </div>
            </div>
            <div class="sidebar">
                <div class="nav-icon">
                    <i class="fas fa-school"><FontAwesomeIcon icon={faSchool} /></i>
                    <div class="title">
                        School
                </div>
                </div>
                <div class="nav-icon">
                    <i class="fas fa-chalkboard-teacher"><FontAwesomeIcon icon={faChalkboardTeacher} /></i>
                    <div class="title">
                        Course
                </div>
                </div>
                <div class="nav-icon">
                    <i class="fas fa-users"><FontAwesomeIcon icon={faUsers} /></i>
                    <div class="title">
                        Student
                </div>
                </div>
            </div>
        </div>
    )
}
export default MenuBar;