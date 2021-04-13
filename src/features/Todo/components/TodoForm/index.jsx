import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title : yup.string()
            .required("Please Enter Title")
            .min(5, "Title is too short"),// nên đặt trong này để có thể sử dụng đa ngôn ngữ(vì mình cần dùng hàm mà)
    });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const {handleSubmit} = form;

    const onTodoSubmit = (data) => {
        // console.log("Todo Form : ",data);
        const {onSubmit} = props;
        if(!onSubmit) return;
        onSubmit(data);
        form.reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onTodoSubmit)}>
                <InputField name="title" label="todo" form={form} />
            </form>
        </div>
    );
}

export default TodoForm;