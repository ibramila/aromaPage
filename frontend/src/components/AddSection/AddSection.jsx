import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { postFormSchema } from "../../schema/postFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import "./style.scss"
function AddSection() {
    const [state, setState] = useState({
        image: "",
        name: "",
        price: null,
        category: ""
    })

    const addData = async () => {
        if (!state.image || !state.name || !state.price || !state.category) return;
        axios.post("http://localhost:3050/products", state)

        setState({
            image: "",
            name: "",
            price: "",
            category: ""
        })
    }


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(postFormSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        addData()
    };

    return (
        <>
            <div className='form_wrapper'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add image</h1>
                    <input {...register("name")}
                        value={state.name}
                        type="text"
                        onChange={handleChange}
                        name="name"
                        placeholder="Name of product"
                    />
                    {errors.name ? (
                        <span style={{ color: "red" }}>{errors.name.message}</span>
                    ) : (
                        <></>
                    )}
                    <input {...register("image")}
                        type="text"
                        value={state.image}
                        name="image"
                        placeholder='Link of product image'
                        onChange={handleChange}
                    />

                    {errors.image ? (
                        <span style={{ color: "red" }}>{errors.image.message}</span>
                    ) : (
                        <></>
                    )}
                    <input {...register("category")}
                        type="text"
                        value={state.category}
                        name="category"
                        placeholder='Link of product category'
                        onChange={handleChange}
                    />

                    {errors.category ? (
                        <span style={{ color: "red" }}>{errors.category.message}</span>
                    ) : (
                        <></>
                    )}
                    <input
                        {...register("price")}
                        type="number"
                        name="price"
                        value={state.price}
                        onChange={handleChange}
                        placeholder="Price"

                    />
                    {errors.price ? (
                        <span style={{ color: "red" }}>{errors.price.message}</span>
                    ) : (
                        <></>
                    )}
                    <button>Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddSection