import React from 'react';
import classes from "./Paginator.module.css";


const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    
    return (
        <div>
            {pages.map(p => {
                return (
                    <span onClick={(e) => {
                        props.onPageChanged(p);
                    }} className={props.currentPage === p ? classes.selected : ''}>{p}</span>
                )
            })}
        </div>
    )
};

export default Paginator;