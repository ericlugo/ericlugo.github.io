import React from "react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ErrorCard from "../components/ErrorCard"


const NotFoundPage = () => (
  <PrimaryLayout className="404" withNav={true}>
    <ErrorCard>
      <h1>💀 404 💀</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Click here to go home</Link>.
      </p>
    </ErrorCard>
  </PrimaryLayout>
)


export default NotFoundPage


export const Head = () => <title>Not found</title>
