import React from 'react'
import { Helmet } from 'react-helmet-async';

function Add() {
    return (
        <div>
            <Helmet>
                <title>Add Page</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            Add
        </div>
    )
}

export default Add