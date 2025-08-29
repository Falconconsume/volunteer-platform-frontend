import { Link } from 'react-router-dom'
import { routs } from '../constants/routes'

const mockListRequests = [
    {
        id: 1,
        title: 'Need help with groceries',
    },
    {
        id: 2,
        title: 'Looking for a tutor',
    },
    {
        id: 3,
        title: 'Dog walking assistance',
    },
]

export default function RequestsPage() {
    return mockListRequests.map((request) => (
        <div key={request.id}>
            <Link to={`${routs.requests}/${request.id}`}>{request.title}</Link>
        </div>
    ))
}
