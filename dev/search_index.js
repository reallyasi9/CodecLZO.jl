var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = CodecLZO","category":"page"},{"location":"#CodecLZO","page":"Home","title":"CodecLZO","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for CodecLZO.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [CodecLZO]","category":"page"},{"location":"#CodecLZO.HashMap","page":"Home","title":"CodecLZO.HashMap","text":"HashMap{K,V}\n\nA super-fast dictionary-like hash table of fixed size for integer keys.\n\n\n\n\n\n","category":"type"},{"location":"#CodecLZO.LZO1X1CompressorCodec","page":"Home","title":"CodecLZO.LZO1X1CompressorCodec","text":"LZO1X1CompressorCodec <: AbstractLZOCompressorCodec\n\nA TranscodingStreams.Codec struct that compresses data according to the 1X1 version of the LZO algorithm.\n\nThe LZO 1X1 algorithm is defined by:\n\nA lookback dictionary implemented as a hash map with a maximum of size of 1<<12 = 4096 elements that uses a specific fast hashing algorithm;\nA 4-byte history lookup window that scans the input with a logarithmically increasing skip distance;\nA maximum lookback distance of 0b11000000_00000000 - 1 = 49151 bytes;\n\nThe C implementation of LZO defined by liblzo2 requires that all compressable information be loaded in working memory at once, and is therefore not adaptable to streaming as required by TranscodingStreams. The C library version therefore uses only a 4096-byte hash map as additional working memory, while this version needs to keep the full 49151 bytes of history in memory in addition to the 4096-byte hash map.\n\n\n\n\n\n","category":"type"},{"location":"#CodecLZO.count_matching-Union{Tuple{T}, Tuple{AbstractVector{T}, AbstractVector{T}}} where T","page":"Home","title":"CodecLZO.count_matching","text":"count_matching(a::AbstractVector, b::AbstractVector)\n\nCount the number of elements at the start of a that match the elements at the start of b.\n\nEquivalent to findfirst(a .!= b), but faster and limiting itself to the first min(length(a), length(b)) elements.\n\n\n\n\n\n","category":"method"},{"location":"#CodecLZO.multiplicative_hash-Union{Tuple{T}, Tuple{T, Integer, Int64}} where T<:Integer","page":"Home","title":"CodecLZO.multiplicative_hash","text":"multiplicative_hash(value, magic_number, bits, [mask::V = typemax(UInt64)])\n\nHash value into a type V using multiplicative hashing.\n\nThis method performs floor((value * magic_number % W) / (W / M)) where W = 2^64, M = 2^m, and magic_number is relatively prime to W, is large, and has a good mix of 1s and 0s in its binary representation. In modulo 2^64 arithmetic, this becomes (value * magic_number) >>> m.\n\n\n\n\n\n","category":"method"},{"location":"#CodecLZO.reinterpret_get-Union{Tuple{T}, Tuple{Type{T}, AbstractVector{UInt8}}, Tuple{Type{T}, AbstractVector{UInt8}, Int64}} where T","page":"Home","title":"CodecLZO.reinterpret_get","text":"reinterpret_get(T::Type, input::AbstractVector{UInt8}, [index::Int = 1])::T\n\nReinterpret bytes from input as an LE-ordered value of type T, optionally starting at index.\n\n\n\n\n\n","category":"method"}]
}
