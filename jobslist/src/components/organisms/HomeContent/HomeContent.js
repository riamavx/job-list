import React from 'react';
import SearchBar from "../../molecules/SearchBar/SearchBar"
import Card from "../../molecules/Card/Card"
import FilterBar from "../../molecules/FilterBar/FilterBar"
import MainTitle from "../../atoms/MainTitle/MainTitle"
import "./homeContent.css"


const HomeContent = ({ texto,titulo, onClick,handleFilters, type, placeholder, value, onChange, data, filters }) => {
    return (
        <main className="homeContent__container" >
        <MainTitle texto={titulo} />

            <section>
                <SearchBar
                    texto={texto}
                    onClick={onClick}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder} />

                    <FilterBar filters={filters} onClick={handleFilters}/>


                <section>
                    {data.length ? (
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

                    ): (<h2>Nenhuma Vaga Encontrada</h2>)
                }
                
                </section>

            </section>
        </main>

    )
}

export default HomeContent;