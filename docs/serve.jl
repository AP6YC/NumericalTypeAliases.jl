"""
    serve.jl

# Description
Convenience script to make and serve the documentation simultaneously.
"""

# --------------------------------------------------------------------------- #
# DEPENDENCIES
# --------------------------------------------------------------------------- #

using LiveServer

# --------------------------------------------------------------------------- #
# SCRIPT
# --------------------------------------------------------------------------- #

# Make the documentation
include("make.jl")

# Serve the documentation for development
serve(dir="build")
