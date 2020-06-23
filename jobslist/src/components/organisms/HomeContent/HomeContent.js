import React from 'react';
import SearchBar from "../../molecules/SearchBar/SearchBar"
import Card from "../../molecules/Card/Card"
import "./homeContent.css"


const HomeContent = ({ texto, onClick, type, placeholder, value, onChange, data }) => {
    return (
        <main>
            <h1>TechJobs</h1>

            <section>
                <SearchBar
                    texto={texto}
                    onClick={onClick}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />


                <div>
                    <h2>FILTROS</h2>
                </div>

                <section>
                    {data ? (
                        data.map(item => {
                            const { logo, company, position, postedAt, contract, location, languages, tools } = item;

                            return (
                                <Card
                                    logo={logo}
                                    company={company}
                                    position={position}
                                    postedAt={postedAt}
                                    contract={contract}
                                    location={location}
                                    languages={languages}
                                    tools={tools}

                                />
                            )
                        })

                    ): (<h2>Não Há Vaga Disponivel</h2>)
                }
                
                </section>

            </section>
        </main>

    )
}

export default HomeContent;