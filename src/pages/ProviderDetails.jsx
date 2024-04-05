import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/auth.context'
import { axiosDelete, get } from '../services/authService'

const ProviderDetails = () => {
    const [thisProvider, setThisProvider] = useState(null)
    const [theseAccounts, setTheseAccounts] = useState([])
    const { providerId } = useParams()
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()


    const deleteProvider = () => {
        console.log(providerId)
        axiosDelete(`/providers/${providerId}`)
        .then((response) => {
            console.log("Deleted provider =====>", response.data)
            navigate('/dashboard')
        })
        .catch((err) => {
            console.log(err)
        })
        console.log("Deleting provider....")
    }

    // const handleDelete = () => {
    //     axiosDelete(`/payments/${accountId}`)
    //         .then((response) => {
    //             console.log("Deleted account ===>", response.data)
    //             navigate('/profileuser')
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //   }

    



    useEffect(() => {
        get(`/providers/details/${providerId}`)
            .then((response) => {
                console.log("This is the response ====>", response.data)
                setThisProvider(response.data.thisProvider)
                setTheseAccounts(response.data.accountList)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [providerId])

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Provider Details</h1>
            {user && (
                <div>
                    <h2 className="text-xl mb-4">Hello {user.name}</h2>
                </div>
            )}
            {theseAccounts.length > 0 && (
                <>
                    {theseAccounts.map((account, index) => (
                        <div key={index} className="border p-4 mb-4">
                            <p>User Name: {thisProvider.username}</p>                        
                            <p>{thisProvider.type}</p>                        
                            <p>Account Number: {account.accountNumber}</p>
                            <p>Email: {account.email}</p>
                            <p>Delinquent Amount: ${account.delinquentAmount}</p>
                            <p>Last Bill Amount: ${account.lastBillAmount}</p>
                            <p>Last Bill Date: {account.lastBillDate}</p>
                            <p>Last Bill Due Date: {account.lastBillDueDate}</p>
                            <p>Last Pay Amount: {account.lastPayAmount}</p>
                            <p>Last Pay Date: {account.lastPayDate}</p>
                            <p>Next Bill Date: {account.nextBillDate}</p>
                            <p>Current Balance: ${account.currentBalance}</p>
                        </div>
                    ))}
                </>
            )}
            {thisProvider && (
                <>
                
                    <p><Link to="#">Update provider credentials</Link></p>
                    <button onClick={deleteProvider} className="relative bg-black px-20 py-3 rounded mt-4 overflow-hidden">
                        <span className="absolute top-0 left-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 text-xl">
                            Remove Provider
                        </span>
                    </button>
          
                </>
            )}
        </div>
    )
}

export default ProviderDetails











