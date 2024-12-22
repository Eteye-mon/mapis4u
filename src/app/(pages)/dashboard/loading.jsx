"use client"

import React, { useState } from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary rounded-full animate-spin border-t-transparent" />
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-4 border-primary/60 rounded-full animate-spin border-t-transparent animation-delay-150" /> */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

