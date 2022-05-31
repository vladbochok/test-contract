// SPDX-License-Identifier: MIT OR Apache-2.0

pragma solidity ^0.8.0;

/// @title HeapLibrary implementation of heap data structure
/// @author Matter Labs
library HeapLibrary {
    struct Heap {
        uint256[] data;
        uint64 height;
    }

    function top(Heap storage _heap) internal view returns (uint256) {
        require(_heap.data.length > 0, "e"); // heap is empty

        return _heap.data[0];
    }

    function push(
        Heap storage _heap,
        uint256 _data
    ) internal {
        _heap.data.push(_data);
        uint256 childIndex = _heap.data.length - 1;

        while (
            childIndex > 0 &&
            _heap.data[childIndex] >
            _heap.data[(childIndex - 1) / 2]
        ) {
            uint256 parrentIndex = (childIndex - 1) / 2;
            _heap.data[childIndex] = _heap.data[parrentIndex];
            _heap.data[parrentIndex] = _data;

            childIndex = parrentIndex;
        }

        // Check that number of elements in the heap after addition is a power of two
        // if so then increase the heap height by 1
        uint256 len = _heap.data.length;
        if ((len & (len - 1)) == 0) {
            _heap.height += 1;
        }
    }

    function pop(Heap storage _heap)
        internal
        returns (uint256)
    {
        require(_heap.data.length > 0, "w"); // heap is empty

        uint256 result = _heap.data[0];

        _heap.data[0] = _heap.data[_heap.data.length - 1];
        _heap.data.pop();

        uint256 parrentIndex = 0;
        while (2 * parrentIndex + 1 < _heap.data.length) {
            uint256 childIndex = 2 * parrentIndex + 1;
            if (
                childIndex + 1 < _heap.data.length &&
                _heap.data[childIndex] <
                _heap.data[childIndex + 1]
            ) {
                childIndex += 1;
            }

            if (
                _heap.data[childIndex] >
                _heap.data[parrentIndex]
            ) {
                uint256 tmpValue = _heap.data[parrentIndex];
                _heap.data[parrentIndex] = _heap.data[childIndex];
                _heap.data[childIndex] = tmpValue;

                parrentIndex = childIndex;
            } else {
                break;
            }
        }

        // Check that number of elements in the heap before removing was a power of two
        // if so then decrease the heap height by 1
        uint256 len = _heap.data.length;
        if ((len & (len + 1)) == 0) {
            _heap.height -= 1;
        }

        return result;
    }

    function getSize(Heap storage _heap) internal view returns (uint256) {
        return _heap.data.length;
    }

    function getHeight(Heap storage _heap) internal view returns (uint64) {
        return _heap.height;
    }
}
