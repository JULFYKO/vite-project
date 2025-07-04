import { useState } from 'react'

const initialReviews = [
    {
        id: 1,
        rating: 5,
        advantages: 'Fast delivery',
        disadvantages: 'High price',
        comment: 'Everything was great!',
        date: '10.06.2024',
        client: 'Roman'
    },
    {
        id: 2,
        rating: 4,
        advantages: 'Good quality',
        disadvantages: 'Few colors',
        comment: 'Overall good.',
        date: '09.06.2024',
        client: 'Ivan'
    }
]

export default function ReviewsPage() {
    const [reviews, setReviews] = useState(initialReviews)
    const [form, setForm] = useState({
        rating: 5,
        advantages: '',
        disadvantages: '',
        comment: '',
        client: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setForm(f => ({ ...f, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newReview = {
            ...form,
            id: Date.now(),
            date: new Date().toLocaleDateString('en-GB')
        }
        setReviews(r => [newReview, ...r])
        setForm({
            rating: 5,
            advantages: '',
            disadvantages: '',
            comment: '',
            client: ''
        })
    }

    return (
        <div className="reviews-page">
            <h2>Reviews</h2>
            <ul className="reviews-list">
                {reviews.map(r => (
                    <li key={r.id} className="review-item">
                        <strong>Rating:</strong> {r.rating}/5<br/>
                        <strong>Pros:</strong> {r.advantages}<br/>
                        <strong>Cons:</strong> {r.disadvantages}<br/>
                        <strong>Comment:</strong> {r.comment}<br/>
                        <strong>Date:</strong> {r.date}<br/>
                        <strong>Name:</strong> {r.client}
                    </li>
                ))}
            </ul>
            <h3>Leave a review</h3>
            <form onSubmit={handleSubmit} className="review-form">
                <label>
                    Rating:
                    <select name="rating" value={form.rating} onChange={handleChange}>
                        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                </label>
                <label>
                    Pros:
                    <input name="advantages" value={form.advantages} onChange={handleChange} required />
                </label>
                <label>
                    Cons:
                    <input name="disadvantages" value={form.disadvantages} onChange={handleChange} required />
                </label>
                <label>
                    Comment:
                    <textarea name="comment" value={form.comment} onChange={handleChange} required />
                </label>
                <label>
                    Your name:
                    <input name="client" value={form.client} onChange={handleChange} required />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
