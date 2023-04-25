import Layout from '@/components/layouts/Layout'
import { NoFavorite } from '@/components/ui'
import { localFavorites } from '@/utils'
import React, { useEffect, useState } from 'react'
import { Card, Container, Grid, Image, Text } from '@nextui-org/react'

type Props = {}

const Favoritos = (props: Props) => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)

    }, [])


    return (
        <Layout titulo='Pokemon - Favoritos'>
            {
                favoritePokemons.length === 0
                    ? (<NoFavorite />)
                    : (
                        <Grid.Container gap={2} direction='row' justify='flex-start'>
                            {
                                favoritePokemons.map(id => (
                                    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                                        <Card isHoverable  >
                                            
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid.Container>
                    ); 
            }
        </Layout>
    )
}

export default Favoritos