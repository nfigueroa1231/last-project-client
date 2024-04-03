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
    <div>
        <h1>Provider Details</h1>

        {
            user &&

            <div>
                <h2>Hello {user.name} </h2>
            </div>
        }

        {
            thisProvider && 
                <>
                   <h2>{thisProvider.type}</h2>
                    <Link>Update provider credentials</Link>
                    <button onClick={deleteProvider}>Remove Provider</button>
                </>
                
        
        }

        {
            theseAccounts.length > 0 &&

            <>
                {
                    theseAccounts.map((account) => {
                      return (
                      
                            <div>
                                    {account.accountNumber}
                                    {account.email}
                                    {account.accountNumber}
                                    {account.delinquentAmount}
                                    {account.lastBillAmount}
                                    {account.lastBillDate}
                                    {account.lastBillDueDate}
                                    {account.lastPayAmount}
                                    {account.lastPayDate}
                                    {account.nextBillDate}
                                    {account.currentBalance}

                            </div>

                        )
                    })
                }
            </>
        }

    </div>
  )
}

export default ProviderDetails