import React from 'react'

const About = () => {
  return (
    <div name="a propos" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                    A propos
                </p>
            </div>

            <p className=' text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias iure amet magni 
                explicabo sapiente voluptatem corporis itaque maxime nihil sunt nisi dolorum non eaque 
                laborum esse, nostrum inventore neque? Sit dolorem facere asperiores unde quae eveniet, 
                dolorum maxime in corrupti dignissimos odit veniam magnam laborum iusto fugit ad atque consequatur!
            </p>

            <br />

            <p className=' text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque exercitationem ab 
                ea provident tempore tenetur, delectus est, minus illo error iste sunt, eos voluptatibus 
                at id quo facilis praesentium dicta? Debitis in quis placeat id vel excepturi commodi, 
                doloremque earum natus! Aspernatur provident iste, corporis ipsa ipsum molestias sunt omnis?
            </p>
        </div>
    </div>
  )
}

export default About