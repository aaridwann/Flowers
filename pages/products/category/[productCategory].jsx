import React from 'react'
import CardComponent from '../../../src/Frontend/Components/Card'
import LayoutComponent from '../../../src/Frontend/Components/Layout'

const exProd = [
  { _id: 1, name: 'xProducts', price: 50000 },
  { _id: 2, name: 'yProducts', price: 30000 },
  { _id: 3, name: 'zProducts', price: 85000 },
  { _id: 4, name: 'aProducts', price: 150000 },
]

function ProductsCategory(props) {
  const { productCategory } = props
  console.log(props)
  return (
    <LayoutComponent>
      <div className="flex flex-col w-4/5 mt-10">
        <div className="grid h-40 card bg-base-300 rounded-box place-items-center">Ads...</div>
        <div className="divider"></div>

        {/* === Content ===  */}
        <div className="flex h-60 card bg-slate-100 rounded-box place-items-center p-5">
          <h1 className=' text-4xl'>{productCategory.slice(0, 1).toUpperCase() + '' + productCategory.slice(1, productCategory.length)}</h1>

          <CardComponent/>

        </div>


      </div>
    </LayoutComponent>
  )
}

export default ProductsCategory

export function getServerSideProps(ctx) {
  console.log(ctx.query)
  return {
    props: ctx.query
  }
}