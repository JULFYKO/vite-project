import { useForm } from 'react-hook-form';

export default function CreateTask({ onCreate }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "Visit the doctor",
            date: new Date().toISOString().split('T')[0], // Format date as YYYY-MM-DD
            important: false,
        }
    });


    function onSubmit(task) {
        console.log("Task creating", task);
        // create new task logic here?
        onCreate(task);
    }

    return (
        <>
            <h2>Create Task</h2>
            <form className="CreateTask" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Title:
                    <input {...register("title")} type="text" name="title" />
                </label>
                <label>
                    Date:
                    <input {...register("date")} type="date" name="date" />
                </label>
                <label>
                    Important:
                    <input {...register("important")} type="checkbox" name="important" />
                </label>
                <button type='submit'>Create</button>
            </form>
        </>
    )
}
