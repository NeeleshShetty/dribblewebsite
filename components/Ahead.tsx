import React from 'react'
import { Card, CardContent } from './ui/card'

function Ahead() {
  return (
    <Card className="w-auto mt-14  ml-14 rounded-2xl bg-[#fef7f1] p-4 mr-10 mb-3 ">
    <CardContent className="flex flex-col lg:flex-row md:items-center md:justify-between gap-3">
      {/* left */}
      <div className="space-y-4 lg:ml-52 mt-5 md:mt-0">
        <h3>Built out of frustration</h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
         Meet the ahead app
        </h1>

        <div className="flex">
          <div>
            <img src="/paclogo.png" alt="logo" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="mt-16">
     <p>A personalized pocket coach that provides bite-<br/> sized, science-driven tools to boost emotional<br/> intelligence.
<br/>
<br/>
Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
      </div>
          
             
     
    </CardContent>
  </Card>
  )
}

export default Ahead