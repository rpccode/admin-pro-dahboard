

export const SiderBar = () => {
    return (

        <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="user-profile">
                            <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><img src="./src/assets/images/users/profile.png" alt="user" /><span className="hide-menu">Steave Jobs </span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#" onClick={(e) => e.preventDefault()}>My Profile </a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>My Balance</a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>Inbox</a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>Account Setting</a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}>Logout</a></li>
                            </ul>
                        </li>
                        <li className="nav-devider" />
                        <li className="nav-small-cap">PERSONAL</li>
                        <li> <a className="waves-effect waves-dark" href={""} aria-expanded="false">
                            <i className="mdi mdi-gauge" />
                            <span className="hide-menu">Dashboard</span>
                        </a>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><i className="mdi mdi-bullseye" /><span className="hide-menu">Apps</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="app-calendar.html">Calendar</a></li>
                                <li><a href="app-chat.html">Chat app</a></li>
                                <li><a href="app-ticket.html">Support Ticket</a></li>
                                <li><a href="app-contact.html">Contact / Employee</a></li>
                                <li><a href="app-contact2.html">Contact Grid</a></li>
                                <li><a href="app-contact-detail.html">Contact Detail</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><i className="mdi mdi-email" /><span className="hide-menu">Inbox</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="app-email.html">Mailbox</a></li>
                                <li><a href="app-email-detail.html">Mailbox Detail</a></li>
                                <li><a href="app-compose.html">Compose Mail</a></li>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href={""} aria-expanded="false"><i className="mdi mdi-chart-bubble" /><span className="hide-menu">Ui Elements <span className="label label-rouded label-danger pull-right">25</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="ui-cards.html">Cards</a></li>
                                <li><a href="ui-user-card.html">User Cards</a></li>
                                <li><a href="ui-buttons.html">Buttons</a></li>
                                <li><a href="ui-modals.html">Modals</a></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
        </aside>
    )
}
