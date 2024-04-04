import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { get } from '../services/authService'

const ProviderDetails = () => {
    const [thisProvider, setThisProvider] = useState(null)
    const [theseAccounts, setTheseAccounts] = useState([])
    const { providerId } = useParams()
    const { user } = useContext(AuthContext)

    const deleteProvider = () => {
        console.log("Deleting provider....")
    }

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







{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>    plus */}
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>       */}



