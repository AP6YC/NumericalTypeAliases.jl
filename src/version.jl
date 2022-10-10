"""
    version.jl

Description:
    Borrowed from MLJ.jl, this defines the version of the package as a constant in the module.

Author:
- Sasha Petrenko <sap625@mst.edu>

Credits:
- MLJ.jl: https://github.com/alan-turing-institute/MLJ.jl
"""

using Pkg

"""
A constant that contains the version of the installed NumericalTypeAliases.jl package.

This value is computed at compile time, so it may be used to programmatically verify the version of `NumericalTypeAliases` that is installed in case a `compat` entry in your Project.toml is missing or otherwise incorrect.
"""
const NTA_VERSION = VersionNumber(
    Pkg.TOML.parsefile(joinpath(dirname(@__DIR__), "Project.toml"))["version"]
)
