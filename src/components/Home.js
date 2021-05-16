import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless delivery"
                background="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventroy"
            />
            <Section />
            <Section />
            <Section />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`