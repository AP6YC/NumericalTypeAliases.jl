"""
    test_sets.jl

The main collection of tests for the NumericalTypeAliases.jl package.
"""

using NumericalTypeAliases
using Test
using Logging

@testset "NumericalTypeAliases" begin
    @info NumericalTypeAliases.NTA_VERSION
    @info NTA_VERSION
end
