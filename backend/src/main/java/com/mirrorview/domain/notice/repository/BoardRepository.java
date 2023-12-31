package com.mirrorview.domain.notice.repository;

import com.mirrorview.domain.notice.domain.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
    Page<Board> findAllByOrderByIdDesc(Pageable pageable);
}
