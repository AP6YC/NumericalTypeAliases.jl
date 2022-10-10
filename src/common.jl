"""
    common.jl

# Description
Types and functions that are used throughout NumericalTypeAliases.jl.

# Authors
- Sasha Petrenko <sap625@mst.edu>
"""

# --------------------------------------------------------------------------- #
# DOCSTRING TEMPLATES
# --------------------------------------------------------------------------- #

# Constants template
@template CONSTANTS =
"""
$(FUNCTIONNAME)

# Description
$(DOCSTRING)
"""

# Types template
@template TYPES =
"""
$(TYPEDEF)

# Summary
$(DOCSTRING)

# Fields
$(TYPEDFIELDS)
"""

# Template for functions, macros, and methods (i.e., constructors)
@template (FUNCTIONS, METHODS, MACROS) =
"""
$(SIGNATURES)

# Summary
$(TYPEDSIGNATURES)
$(DOCSTRING)

# Method List / Definition Locations
$(METHODLIST)
"""
