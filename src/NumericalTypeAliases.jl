"""
Main module for `NumericalTypeAliases.jl`, a Julia package of numerical array type aliases.

This module exports all of the type aliases and utilities used by the `NumericalTypeAliases.jl package.`

# Basic Usage

Install and import the package interactively with

```julia-repl
julia> ]
(@v1.8) pkg> add NumericalTypeAliases
```

Then develop your package with numerical aliases such as

```julia
using NumericalTypeAliases

function do_something(data::RealMatrix, labels::IntegerVector)
    # Write a function that requires a 2-D float matrix and integer vector.
end
```

# Imports

The following names are imported by the package as dependencies:
$(IMPORTS)

# Exports

The following names are exported and available when `using` the package:
$(EXPORTS)
"""
module NumericalTypeAliases

# --------------------------------------------------------------------------- #
# DEPENDENCIES
# --------------------------------------------------------------------------- #

# Full usings
using DocStringExtensions   # Docstring utilities

# --------------------------------------------------------------------------- #
# INCLUDES
# --------------------------------------------------------------------------- #

# Include all project files
include("common.jl")    # Shared code (i.e., doc templates)
include("version.jl")   # Version script, provides NTA_VERSION
include("aliases.jl")   # All type aliases

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
    NTA_CONCRETE_TYPES,
    NTA_TYPES

end # module NumericalTypeAliases
