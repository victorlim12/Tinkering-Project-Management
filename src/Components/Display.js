import React, { useState } from 'react'
import clsx from 'clsx'
import './Storage.css'

export default function Cinema({ test, selectedStore, onSelectedStoreChange, page, setPage, formData, setFormData }) {
    let n = 8
    const stores = Array.from({ length: 1 * n }, (_, i) => i)
    console.log(selectedStore)

    function handleSelectedState(store) {
      const isSelected = selectedStore.includes(store)
      if (isSelected) {
        onSelectedStoreChange(
          selectedStore.filter(selectedStore => selectedStore !== store),
        )
        //modify allow to pick one only
      } else  {
        onSelectedStoreChange([store])
        setFormData({ ...formData, Storage: store })
      }
    }
  
    return (
    <div className='Storage'>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <div className ='stores'>
          {stores.map(store => {
            store= 'C'+String(store+1)
            const isSelected = selectedStore.includes(store)
            const isOccupied = test.notavailable.includes(store)
            // console.log(isOccupied)
            return (
              <span
                tabIndex="0"
                key={store}
                className={clsx(
                  'store',
                  isSelected && 'selected',
                  isOccupied && 'occupied',
                )}
                onClick={isOccupied ? null : () => handleSelectedState(store)}
                onKeyPress={
                  isOccupied
                    ? null
                    : e => {
                        if (e.key === 'Enter') {
                          handleSelectedState(store)
                        }
                      }
                }
              />
            )
          })}
        </div>
      </div>
    )
  }
  