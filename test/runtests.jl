"""
    runtests.jl

# Description
The entry point to unit tests for the AdaptiveResonance.jl package.
"""

using SafeTestsets

@safetestset "All Test Sets" begin
    include("test_sets.jl")
end
