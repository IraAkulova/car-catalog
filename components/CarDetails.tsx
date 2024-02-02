import { CarProps } from '@/types';
import React from 'react'

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

function CarDetails({isOpen, closeModal, car} : CarDetailsProps) {
  return (
    <div>
      
    </div>
  )
}

export default CarDetails
