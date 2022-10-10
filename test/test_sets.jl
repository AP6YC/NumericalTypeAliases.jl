"""
    test_sets.jl

The main collection of tests for the NumericalTypeAliases.jl package.
"""

using NumericalTypeAliases
using Test
using Logging

@testset "NumericalTypeAliases" begin
    @test NumericalTypeAliases.NTA_VERSION == NTA_VERSION
    @info NTA_VERSION
end

@testset "Types" begin

    @info "System word size: $(Sys.WORD_SIZE)"

    # Test that the real types work as expected
    @test ones(2) isa RealVector
    @test ones(2, 2) isa RealMatrix
    @test ones(2, 2, 2) isa RealArray

    # Test that the integer types work as expected
    @test ones(Int, 2) isa IntegerVector
    @test ones(Int, 2, 2) isa IntegerMatrix
    @test ones(Int, 2, 2, 2) isa IntegerArray

    # Test that the floats work
    local_float = 1.5
    @info "Type of float: $(typeof(local_float))"
    @test local_float isa RealFP    # Abstract
    @test local_float isa Float     # Concrete

    # Test the hierarchy of the real types
    @test RealVector <: RealArray
    @test RealMatrix <: RealArray

    # Test the hierarchy of the integer types
    @test IntegerVector <: IntegerArray
    @test IntegerMatrix <: IntegerArray

    # Test the float hierarchy
    @test Float <: RealFP
end

@testset "Abstract Types" begin
    # Check that all abstract types are indeed abstract
    for local_type in NTA_ABSTRACT_TYPES
        @test isabstracttype(local_type)
    end
end

@testset "Concrete Types" begin
    # Check that all concrete types are indeed concrete
    for local_type in NTA_CONCRETE_TYPES
        @test isconcretetype(local_type)
    end
end

@testset "Construction" begin
    # Create a struct with a concrete type inside
    struct MyStruct
        local_float::Float
    end

    # Initialize
    local_struct = MyStruct(1.5)

    # Test that the types are correct
    @test local_struct.local_float isa Float
    @test local_struct.local_float isa RealFP
end

@testset "Type Lists" begin
    # Test that every entry in the lists is a valid type
    for my_type in NTA_TYPES
        @test my_type isa Type
    end
end
