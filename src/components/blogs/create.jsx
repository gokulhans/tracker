import { useState } from 'react';
import fb from '../../firebase';

const CreateBlog = () => {
    const db = fb.firestore()
    const Blogs = db.collection('blogs');
    const [title, SetTitle] = useState("");
    const [body, SetBody] = useState("");

    const sub = (e) => {
        e.preventDefault();
        // Add data to the store
        Blogs.add({
            Title: title,
            Body: body,
            publish: false,
            published_on: fb.firestore.Timestamp.fromDate(new Date())
        })
            .then((docRef) => {
                alert("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    return (
        <div>
            <div>
                <form onSubmit={(event) => { sub(event) }}>
                    <input type="text" placeholder="Title"
                        onChange={(e) => { SetTitle(e.target.value) }} required />

                    <textarea name="content" type="text" placeholder="write yoyr content here"
                        rows="10" cols="150" onChange={(e) => { SetBody(e.target.value) }} required >
                    </textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default CreateBlog;