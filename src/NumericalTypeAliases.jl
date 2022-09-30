"""
Main module for `NumericalTypeAliases.jl`, a Julia package of numerical array type aliases.

This module exports all of the type aliases and utilities used by the `NumericalTypeAliases.jl package.`

# Exports

$(EXPORTS)

"""
module NumericalTypeAliases

# --------------------------------------------------------------------------- #
# DEPENDENCIES
# --------------------------------------------------------------------------- #

using DocStringExtensions

# --------------------------------------------------------------------------- #
# INCLUDES
# --------------------------------------------------------------------------- #

include("version.jl")
include("aliases.jl")

# --------------------------------------------------------------------------- #
# EXPORTS
# --------------------------------------------------------------------------- #

export

    RealArray,
    RealVector,
    RealMatrix,
    IntegerArray,
    IntegerVector,
    IntegerMatrix,
    RealFP,
    Float,
    NTA_VERSION,
    NTA_ABSTRACT_TYPES,
    NTA_CONCRETE_TYPES

end # module NumericalTypeAliases
