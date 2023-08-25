import React from 'react'

const PolicySection = () => {
  return (
    <div className="h-[200px] w-[310px] bg-white rounded-md my-10 p-3 text-[11px]">
          <div className="flex mb-4">
            <div className="mr-12 cursor-not-allowed">
              <p className="w-[120px]">User Agreemement</p>
              <p>privacy Policy</p>
            </div>
            <div className="cursor-not-allowed">
              <p>Content Policy</p>
              <p>Moderator Code of conduct</p>
            </div>
          </div>

          <hr />
          <div className="flex mb-2">
            <div className="pt-2 mr-32 cursor-not-allowed">
              <p>English</p>
              <p>Francais</p>
              <p>Italiano</p>
            </div>
            <div className="pt-2 cursor-not-allowed">
              <p>Deutsch</p>
              <p>Espanol</p>
              <p>Portugues</p>
            </div>
          </div>
          <hr />
          <p className="mt-1">Cakin. Inc &copy; 2023. All rights reserverd.</p>
        </div>
  )
}

export default PolicySection