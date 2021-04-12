import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader } from '../shared/components/card'

export const Home: FC = () => (
  <div>
    <h1>Home</h1>

    <p>Harmony is an app for discovering chords in different voicings.</p>

    <Card>
      <CardHeader>Chords</CardHeader>
      <CardBody>
        Blah blah blah. Maj 7 maj 9, blah blah. <Link to='/blah'>BLAH</Link>
      </CardBody>
    </Card>
  </div>
)
