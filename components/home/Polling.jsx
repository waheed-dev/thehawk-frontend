import endpoints from '@/config/endpoints'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Polling() {
    const [poolData, setpoolData] = useState()
    const loadData = async () => {
        try {
            const { data } = await axios.get(endpoints.pool.get)

            setpoolData(data)
        } catch (error) {

        }
    }
    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <div className="side-widget sw-poll">
                <h5><span>Polling Box</span></h5>
                <div className="sw-inner">
                    <h4>{poolData?.title}</h4>
                    <form>
                        <ul>
                            {
                                poolData?.question?.map((option) => (
                                    <>
                                        <li><input type="radio" name='options' id={option?.id} className="css-checkbox" />
                                            <label for={option?.id} className="css-label radGroup1">
                                                {
                                                    option.text
                                                }
                                            </label></li>
                                    </>
                                ))

                            }


                        </ul>
                    </form>
                    <div className="dual-btns">
                        <a href="#">Vote</a>
                        <a href="#">View Result</a>
                    </div>
                </div>
            </div>
        </>
    )
}
